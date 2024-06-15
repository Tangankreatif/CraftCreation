import React, { useEffect } from "react";
import Layout from './Layout'
import Formeditpenjual from '../components/Formeditpenjual'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Editpenjual = () => {
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
        <Formeditpenjual/>
    </Layout>
  )
}

export default Editpenjual