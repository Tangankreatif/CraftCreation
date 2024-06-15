import React, { useEffect } from "react";
import Layout from './Layout'
import Formtambahproduct from '../components/Formtambahproduct'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Tambahproduct = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
    <Formtambahproduct/>
</Layout>
  )
}

export default Tambahproduct