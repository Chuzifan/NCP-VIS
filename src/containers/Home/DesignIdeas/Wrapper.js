/*
 * @Author: konglingyuan
 * @Description: A Vue/React Project File
 * @Date: 2019-06-19 17:09:39
 * @LastEditors: konglingyuan
 * @LastEditTime: 2020-03-18 08:51:30
 */
import styled from 'styled-components';
const Wrapper = styled.div`
    width:100%;
    height:100%;
    margin:0px;
    display: flex | inline-flex;
    max-width: 1200px;
    
    & .post-container{
        width: calc(33.333333% - 30px);
        margin: 0 15px;
        border: 1px solid #e5e5e5;
        background: #fefefe;
        box-shadow: 0 3px 6px -4px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    & figure{
        margin: 0;
        width: 100%;
        height: auto;
    }
    & img{
        width: 100%;
        height: auto;
    }
    & .post-title{
        font-size: 30px;
        line-height: .3em;
        display: inline-block;
        margin-left: 5px;
        padding-left: 5px;
        text-align: left;
        border-left: 1px solid #fff;
    }
    & .post-content{
        display: block;
    }
    
    & h3{
        font-size: 20px;
        font-weight: 500;
        line-height: 1.6em;
        margin: 0 20px;
    }
    & .post-desc{
        font-size: 14px;
        line-height: 1.6em;
        min-height: 90px;
        margin-top: 0;
        margin-bottom: 0;
        opacity: .9;
        color: #222;
        margin: 0 20px;
    }
    @media (max-width: 768px){
        flex-direction: column;
        display: flex;
        & .post-container{
            float: none!important;
            width: 100%!important;
            height: auto;
            margin:10px 0px;
            padding:10px 10px;
            left: 50%;
            position: relative;
            transform: translateX(-50%);
                
        }
        & figure{
            display: inline-block;
            width:150px;
            height: auto;
            float:left;
            
        }
        & img{
            width:150px!important;
            height:auto!important;
        }
        & .post-content{
            display: inline-block;
            float:left;
            width:calc(100% - 160px);
            text-align: left;
            /*position: fixed;*/
            /*top: 50%;*/
            /* left: 50%; */
            /* background-color: #000; */
            /* width: 50%; */
            /* height: 50%;*/
            /* -webkit-transform: translateX(-50%) translateY(-50%);*/
        }
        & h3{
            text-align: left;
            margin: 0 20px;
        }
        & .post-desc{
            text-align: left;
            margin: 0 20px;
        }
    }
`;
export default Wrapper;