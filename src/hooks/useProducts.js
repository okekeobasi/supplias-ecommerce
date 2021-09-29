import { useCallback, useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { supabase } from '../server/supabase';

const useProducts = () => {
  const {
    state: { user },
  } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: '',
    case_count: '',
    mpu: '',
    sku_id: '',
    status: '',
    amount: '',
  });

  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [products, setProducts] = useState([]);

  const showModal = () => {
    setOpenModal(true);
  };

  const createProduct = async () => {
    setErrorMessage('');
    setLoading(true);
    try {
      Object.keys(formData).map((key) => {
        if (!!!formData[key]) throw Error(`${key} is required`);
        else return null;
      });

      let { data: product, error } = await supabase
        .from('products')
        .insert({ ...formData, user_id: user.id })
        .single();

      let newProducts = products.slice(0);
      newProducts.push(product);

      getProducts();
      if (error) throw error;
    } catch (error) {
      setErrorMessage(error.error_description || error.message);
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getProducts = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('user_id', user.id);
      if (error) throw error;

      if (data) setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return {
    formData,
    openModal,
    products,
    loading,
    errorMessage,
    setOpenModal,
    showModal,
    createProduct,
    handleInputChange,
  };
};

export default useProducts;
