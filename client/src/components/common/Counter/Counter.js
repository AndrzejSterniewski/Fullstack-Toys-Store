import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './Counter.module.scss';
import Button from '../Button/Button';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const Counter = () => {

    const [productAmount, setProductAmount] = useState(1);

    useEffect(() => {
        if (productAmount < 1)
            setProductAmount(1);
        if (productAmount > 10)
            setProductAmount(10);
    }, [productAmount]);

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    // const substractProduct = () => {
    //     if (productAmount > 1)
    //         setProductAmout(productAmount - 1)
    // };

    // const addProduct = () => {
    //     if (productAmount < 10)
    //         setProductAmout(productAmount + 1);
    // };

    return (
        <div className={styles.counter_container}>
            <div>Quantity: </div>
            <div className={styles.counter_input}>
                <Button onClick={() => setProductAmount(productAmount - 1)} content={<FaMinus />} />
                {/* <input {...register("productAmount", { min: 1, max: 10 })}
                    type="number" value={productAmount}
                    onChange={e => setProductAmount(e.target.value)}></input> */}
                {/* <input value={productAmount} productAmount={productAmount} onChange={e => setProductAmount(e.target.value)}></input> */}
                <input value={productAmount} onChange={e => setProductAmount(e.target.value)}></input>
                <Button onClick={() => setProductAmount(productAmount + 1)} content={<FaPlus />} />
            </div>
        </div>
    )
};

export default Counter;