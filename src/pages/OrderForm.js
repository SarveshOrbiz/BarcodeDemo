import React, { useState } from 'react'
import Textfield from '../components/Textfield'
import { useTranslation } from 'react-i18next'

import './orderform.css';

const dummyItems = [
    {
        "name":"Chicken",
        "price":2,
        "qty":2
    },
    {
        "name":"Lamb",
        "price":6,
        "qty":1,
    },
    {
        "name":"Pork",
        "price":10,
        "qty":3
    },
    {
        "name":"Beef",
        "price":12,
        "qty":2
    },
]

const OrderForm = () => {
    const { t,i18n } = useTranslation();

    const [language,setLanguage] = useState("zh-Hans");

    const changeLanguage = () => {
        i18n.changeLanguage(language);
        if(language==="en"){
            setLanguage("zh-Hans")
        }
        else{
            setLanguage("en")
        }
    }

  return (
    <div className='container my-3'>
        <div className='lang-panel'>
        <div className='btn btn-primary' onClick={changeLanguage}>
            {language==="en"?"English":"中国人"}
        </div>
        </div>
        <hr/>
        <div className='row'>
            <p className='section-title'>{t("customer-details.title")}</p>
            <div className='col-md-6'>
                <Textfield label={t("customer-details.customer_name.label")} name="c_name" type='text' placeholder={t("customer-details.customer_name.placeholder")} />
            </div>
            <div className='col-md-6'>
                <Textfield label={t("customer-details.customer_id.label")} name="c_id" type='number' placeholder='1XX90' />
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-md-12'>
                <label className="form-label">{t("customer-details.address.label")}</label>
                <textarea className='form-control' rows={5} placeholder={t("customer-details.address.placeholder")} />
            </div>
        </div>
        <div className='row'>
            <p className='section-title'>{t("order-details.title")}</p>
                <div className='col-md-6'>
                    <Textfield label={t("order-details.id")} name="o_id" type="number" placeholder="1237581220" />
                </div>
                <div className='col-md-6'>
                    <Textfield label={t("order-details.sp_id")} name="sp_id" type="number" placeholder="109887" />
                </div>
        </div>
        <div className='row'>
                <label className='form-label'>{t("order-details.orderedItems")}</label>
                <div className='container'>
                <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">{t("order-details.prod_name")}</th>
                            <th scope="col">{t("order-details.price")}</th>
                            <th scope="col">{t("order-details.quantity")}</th>
                            <th scope="col">{t("order-details.total")}</th>
                          </tr>
                        </thead>
                        <tbody>
                    {dummyItems.map((item,index)=>{
                        return<tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.qty}</td>
                            <td>${item.qty*item.price}</td>
                          </tr>
                    })}
                    </tbody>
                </table>
                </div>
            </div>
            <div className='row'>
                <label className='form-label'>{t("order-details.summary")}</label>
            </div>  
    </div>
  )
}

export default OrderForm