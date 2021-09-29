import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { supabase } from '../server/supabase';

const useSignup = () => {
  const { save } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setErrorMessage('');
    setLoading(true);
    try {
      Object.keys(formData).map((key) => {
        if (!!!formData[key]) throw Error(`${key} is required`);
        else return null;
      });

      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      const { err } = await supabase
        .from('profiles')
        .insert({
          name: formData.name,
          id: user.id,
        })
        .single();

      if (err) throw err;

      save(user);
    } catch (error) {
      setErrorMessage(error.error_description || error.message);
    }
    setLoading(false);
  };

  return { formData, errorMessage, loading, handleInputChange, handleSubmit };
};

export default useSignup;
