import React, { useEffect } from "react";
import Layout from './Layout'
import Listpenjual from '../components/Listpenjual'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Penjual = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, penjual } = useSelector((state) => state.auth);
  
    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);
  
    useEffect(() => {
      if (isError) {
        navigate("/");
      }
      if (penjual && penjual.role !== "user") {
        navigate("/dashboard");
      }
    }, [isError, penjual, navigate]);
    return (
      <Layout>
        <Listpenjual />
      </Layout>
    );
  };

export default Penjual