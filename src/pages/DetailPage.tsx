import React,{useEffect} from 'react'
import{Link, useParams} from 'react-router-dom';
import { getSinglePost } from './../utils/api';
import SinglePost from './../components/Posts/SinglePost';

const DetailPage = () => {
  return (
    <>
    <SinglePost/>
    </>
  )
}

export default DetailPage