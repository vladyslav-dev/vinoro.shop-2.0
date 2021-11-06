import React, { useContext, useEffect } from 'react'
import styles from './PersonalDataForm.module.scss'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { SavedUserSvg } from '@/icons/User'
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ //fix reg

const schema = yup.object().shape({
    name: yup.string()
        .required("Введите ваше имя"),
    surname: yup.string()
        .required("Введите вашу фамилию"),
    email: yup.string()
        .email("Введите корректный email")
        .required("Введите ваш email. Пример example@gmail.com"),
    phone: yup.string()
        .required("Введите ваш номер телефона")
        .matches(phoneRegExp, "Введите корректный телефон"),
    city: yup.string()
        .required("Введите ваш город"),
}).required();

const PersonalDataForm = () => {

    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })

    const savedUser = {
        isSaved: true,
        user: {
            name: "Владислав Григоренко"
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.formWrapper}>
                    <div className={styles.formHeader}>
                        <div className={styles.formHeaderItem}>
                            <h3>ЛИЧНЫЕ ДАННЫЕ</h3>
                        </div>
                        {savedUser.isSaved && (
                            <div className={styles.formHeaderItem}>
                                <div className={styles.formHeaderItemText}>
                                    Сохраненный пользователь
                                </div>
                                <div className={styles.formSavedUser}>
                                    <SavedUserSvg />
                                    <p>{savedUser.user.name}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <form onSubmit={(e) => e.preventDefault()} autoComplete="none" className={styles.form}>
                        <div className={styles.formRowWrapper}>
                            <div className={styles.formRow}>
                                <input
                                    {...register("name")}
                                    id="name"
                                    autoComplete="none"
                                    className={styles.formRowInput}
                                />
                                <label
                                    htmlFor="name"
                                    className={`${styles.formRowLabel} ${watch('name') ? styles.formRowLabelActive : ""}`}
                                >
                                    Имя
                            </label>
                                <p className={styles.formRowError}>
                                    {errors.name?.message}
                                </p>
                            </div>
                            <div className={styles.formRow}>
                                <input
                                    {...register("surname")}
                                    id="surname"
                                    autoComplete="none"
                                    className={styles.formRowInput}
                                />
                                <label
                                    htmlFor="surname"
                                    className={`${styles.formRowLabel} ${watch('surname') ? styles.formRowLabelActive : ""}`}
                                >
                                    Фамилия
                            </label>
                                <p className={styles.formRowError}>
                                    {errors.surname?.message}
                                </p>
                            </div>
                        </div>
                        <div className={styles.formRowWrapper}>
                            <div className={styles.formRow}>
                                <input
                                    {...register("email")}
                                    id="email"
                                    autoComplete="none"
                                    className={styles.formRowInput}
                                />
                                <label
                                    htmlFor="email"
                                    className={`${styles.formRowLabel} ${watch('email') ? styles.formRowLabelActive : ""}`}
                                >
                                    Email
                            </label>
                                <p className={styles.formRowError}>
                                    {errors.email?.message}
                                </p>
                            </div>
                        </div>
                        <div className={styles.formRowWrapper}>
                            <div className={styles.formRow}>
                                <input
                                    {...register("phone")}
                                    id="phone"
                                    autoComplete="none"
                                    className={styles.formRowInput}
                                />
                                <label
                                    htmlFor="phone"
                                    className={`${styles.formRowLabel} ${watch('phone') ? styles.formRowLabelActive : ""}`}
                                >
                                    Телефон
                            </label>
                                <p className={styles.formRowError}>
                                    {errors.phone?.message}
                                </p>
                            </div>
                        </div>
                        <div className={styles.formRowWrapper}>
                            <div className={styles.formRow}>
                                <input
                                    {...register("city")}
                                    id="city"
                                    autoComplete="none"
                                    className={styles.formRowInput}
                                />
                                <label
                                    htmlFor="city"
                                    className={`${styles.formRowLabel} ${watch('city') ? styles.formRowLabelActive : ""}`}
                                >
                                    Город
                            </label>
                                <p className={styles.formRowError}>
                                    {errors.city?.message}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default PersonalDataForm
