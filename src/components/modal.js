import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import times from '../assets/times.svg';
import CancelButton from './cancel-btn';
import MiniButton from './mini-btn';

export default function Modal({
  isOpen,
  setIsOpen,
  loading,
  children,
  submitAction,
}) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full md:w-500px overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
                <Dialog.Title
                  as="div"
                  className="p-5 border-b flex items-center justify-between"
                >
                  <h3 className="text-base font-medium text-black">
                    Add Product
                  </h3>
                  <img
                    src={times}
                    alt="close"
                    className="cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="p-6">{children}</div>

                <div className="mt-4 border-t p-5 flex justify-end items-center space-x-2 w-full">
                  <CancelButton placeholder="Cancel" onClick={closeModal} />
                  <MiniButton
                    loading={loading}
                    placeholder="Add Product"
                    onClick={submitAction}
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
