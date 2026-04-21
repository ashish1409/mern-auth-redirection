import axios from 'axios';
import { useState,useEffect } from 'react';

const EmailVerification = () => {
  const [loading, setLoading] = useState(true);
  const [succes , setSuccess] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);
  const tokenId = urlParams.get('token');
  console.log(tokenId);

useEffect(()=>{
  const handleEmailVerification = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/users/verify-email', { tokenId });
      console.log(response.data);
      setSuccess(true);
    } catch (error) {
      console.error('Email verification failed:', error);
      setSuccess(false);
    } finally {
      setLoading(false); 
    }
  };

  if(!tokenId) {
    console.error('Token is required');
    return;
  }
  handleEmailVerification();
}, [tokenId]);

  return (
    <>
      {loading ? (
        <div>Verifying your email...</div>
      ) : succes ? (
        <div>Email verified successfully! You can now log in.</div>
      ) : (
        <div>Email verification failed. Please try again.</div>
      )}
    </>
  )
}

export default EmailVerification
