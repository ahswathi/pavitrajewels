import React, { useState } from "react";
import styles from "./checkout.module.css";
import {
    Box,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
    Button,
    Typography,
    FormControl,
} from "@mui/material";

const Checkout = () => {
    const [address, setAddress] = useState("billing");
    const [paymentMethod, setPaymentMethod] = useState("creditCard");

    return (
        <div className={styles.chekoutContainer}>

            <div className={styles.chekoutForm}>
                <div className={styles.chekoutCustminfo}>
                    <form className={styles.profileform} /* onSubmit={handleSubmit} */>

                        <h2>Billing Details</h2>
                        <p>Note: Pan card details are needed as per the company policy of payment more than <span>RS. 2,00,000</span></p>
                        <div className={styles.profilerow}>
                            <div className={styles.profileformGroup1} style={{ flexDirection: "row", borderRight: "none", borderRadius:'5px 0px 0px 5px !important'  }}>

                                <input style={{width: "70%", borderRadius:'5px 0px 0px 5px !important'}}
                                    type="text"
                                    name="pan"
                                    placeholder="Upload Pan card image"
                                    required
                                />
                                <button style={{ width: "50%" }}>Upload Image</button>
                            </div>

                            <div className={styles.profileformGroup}>
                                {/*  <label>Last Name *</label> */}
                                <input
                                    type="text"
                                    name="pannumber*"
                                    /* value={formData.lastName}
                                    onChange={handleChange} */
                                    placeholder="Pan card number*"
                                    required
                                />
                            </div>
                        </div>


                        <div className={styles.profilerow}>
                            <div className={styles.profileformGroup}>
                                {/*   <label>First Name *</label> */}
                                <input
                                    type="text"
                                    name="firstName"
                                    /*   value={formData.firstName}
                                      onChange={handleChange} */
                                    placeholder="First name"
                                    required
                                />
                            </div>

                            <div className={styles.profileformGroup}>
                                {/*  <label>Last Name *</label> */}
                                <input
                                    type="text"
                                    name="lastName"
                                    /* value={formData.lastName}
                                    onChange={handleChange} */
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.profilerow}>
                            <div className={styles.profileformGroup}>
                                {/* <label>Phone *</label> */}
                                <input
                                    type="tel"
                                    name="phone"
                                    /*   value={formData.phone}
                                      onChange={handleChange} */
                                    placeholder="Phone"
                                    required
                                />
                            </div>

                            <div className={styles.profileformGroup}>
                                {/*  <label>House number and street name</label> */}
                                <input
                                    type="text"
                                    name="houseNumber"
                                    /*   value={formData.houseNumber}
                                      onChange={handleChange} */
                                    placeholder="House number and street name"
                                />
                            </div>
                        </div>

                        <div className={styles.profilerow}>
                            <div className={styles.profileformGroup}>
                                {/*   <label>Apartment, suite, unit, etc. (optional)</label> */}
                                <input
                                    type="text"
                                    name="addressLine2"
                                    /* value={formData.addressLine2}
                                    onChange={handleChange} */
                                    placeholder="Apartment, suite, unit, etc."
                                />
                            </div>

                            <div className={styles.profileformGroup}>
                                {/*  <label>Company Name</label> */}
                                <input
                                    type="text"
                                    name="companyName"
                                    /*  value={formData.companyName}
                                     onChange={handleChange} */
                                    placeholder="Company name"
                                />
                            </div>
                        </div>
                        <div className={styles.profilerow}>
                            <div className={styles.profileformGroup}>
                                {/*   <label>City *</label> */}
                                <input
                                    type="text"
                                    name="city"
                                    /*  value={formData.city}
                                     onChange={handleChange} */
                                    placeholder="City"
                                    required
                                />
                            </div>

                            <div className={styles.profileformGroup}>
                                {/*     <label>Zip *</label> */}
                                <input
                                    type="text"
                                    name="zip"
                                    /*  value={formData.zip}
                                     onChange={handleChange} */
                                    placeholder="Zip"
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.profilerow}>
                            <div className={styles.profileformGroup}>
                                {/*  <label>State</label> */}
                                <select
                                    name="state"
                                /* value={formData.state}
                                onChange={handleChange} */
                                >
                                    <option value="">State</option>
                                    {/* Add options for states */}
                                    <option value="State 1">State 1</option>
                                    <option value="State 2">State 2</option>
                                </select>
                            </div>

                            <div className={styles.profileformGroup}>
                                {/*  <label>Country</label> */}
                                <select
                                    name="country"
                                /*  value={formData.country} */
                                /*  onChange={handleChange} */
                                >
                                    <option value="">Country</option>
                                    {/* Add options for countries */}
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.checkboxGroup}>
                            <input
                                type="checkbox"
                                name="isDefault"
                            /*   checked={formData.isDefault}
                              onChange={handleChange} */
                            />
                            <label>Save my information for a faster checkout</label>

                        </div>
                    </form>
                </div>

                <div className={styles.hline}></div>

                <div className={styles.chekoutPayment}>
                    <h2>Shipping Address</h2>
                    <span>Select the address that matches your card or payment method.</span>

                    <div className={styles.profileformGroup} style={{ backgroundColor: "#F6F6F6", borderRadius: "4px", marginTop: "20px" }}>
                        <div className={styles.paymentOption} style={{ border: 'none' }}>
                            <div>
                                <input
                                    type="radio"
                                    id="creditCard"
                                    name="paymentMethod"
                                    value="creditCard"
                                />
                                <label htmlFor="creditCard" className={styles.paymentLabel}>Same as Billing address</label>
                            </div>
                        </div>
                        <div className={styles.hline2} ></div>
                        <div className={styles.paymentOption} style={{ border: 'none' }}>
                            <div>
                                <input
                                    type="radio"
                                    id="creditCard"
                                    name="paymentMethod"
                                    value="creditCard"
                                /*   checked={paymentMethod === "creditCard"}
                                  onChange={handlePaymentChange} */
                                />
                                <label htmlFor="creditCard" className={styles.paymentLabel}>Use a different shipping address</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.chekoutPayment}>
                    <h2>Payment method</h2>
                    <span>All transactions are secure and encrypted.</span>
                    <form className={styles.profileform} /* onSubmit={handleSubmit} */>
                        <div className={styles.profileformGroup} style={{ backgroundColor: "#F6F6F6", borderRadius: "4px", marginTop: "20px" }}>
                            <div className={styles.paymentOption} style={{ border: 'none' }}>
                                <div>
                                    <input
                                        type="radio"
                                        id="creditCard"
                                        name="paymentMethod"
                                        value="creditCard"
                                    /*   checked={paymentMethod === "creditCard"}
                                      onChange={handlePaymentChange} */
                                    />
                                    <label htmlFor="creditCard" className={styles.paymentLabel}>Pay by Card Credit</label>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: "column", gap: "14px", margin: "10px 30px 20px 30px" }}>
                                <div style={{ display: 'flex', gap: "14px" }}>
                                    <svg width="80" height="46" viewBox="0 0 80 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="46" rx="8" fill="white" />
                                        <path d="M38.8529 22.0881V26.9407H37.3027V14.9569H41.4141C41.9049 14.9467 42.3928 15.0331 42.8497 15.2112C43.3067 15.3892 43.7236 15.6554 44.0764 15.9943C44.4328 16.3127 44.7164 16.7031 44.9082 17.1393C45.1 17.5755 45.1956 18.0475 45.1885 18.5234C45.1987 19.0019 45.1046 19.477 44.9126 19.916C44.7207 20.355 44.4354 20.7476 44.0764 21.0669C43.3575 21.7477 42.47 22.0878 41.4141 22.0871H38.8529V22.0881ZM38.8529 16.4323V20.6156H41.4526C41.7376 20.624 42.0213 20.5732 42.2854 20.4665C42.5495 20.3598 42.7883 20.1995 42.9864 19.996C43.1836 19.8056 43.3403 19.578 43.4473 19.3264C43.5543 19.0749 43.6094 18.8046 43.6094 18.5316C43.6094 18.2585 43.5543 17.9882 43.4473 17.7367C43.3403 17.4852 43.1836 17.2575 42.9864 17.0672C42.7907 16.8593 42.5528 16.6951 42.2884 16.5855C42.0239 16.4759 41.7391 16.4233 41.4526 16.4313H38.8529V16.4323Z" fill="#5F6368" />
                                        <path d="M48.7606 18.4736C49.9064 18.4736 50.8108 18.7777 51.4739 19.3858C52.137 19.994 52.4682 20.8278 52.4676 21.8872V26.9407H50.9848V25.8028H50.9174C50.2755 26.7399 49.4217 27.2084 48.3562 27.2084C47.4466 27.2084 46.6857 26.9407 46.0733 26.4052C45.7794 26.1594 45.5444 25.8517 45.3855 25.5043C45.2266 25.1569 45.1478 24.7787 45.1547 24.3972C45.1547 23.5488 45.4776 22.874 46.1233 22.373C46.7691 21.8719 47.6312 21.6208 48.7096 21.6195C49.63 21.6195 50.3881 21.7868 50.9838 22.1215V21.7696C50.9856 21.5095 50.929 21.2523 50.8183 21.0167C50.7075 20.781 50.5454 20.5728 50.3435 20.407C49.9336 20.0397 49.3993 19.8393 48.8472 19.8458C47.9813 19.8458 47.2961 20.2085 46.7916 20.9339L45.4262 20.08C46.1773 19.0091 47.2887 18.4736 48.7606 18.4736ZM46.755 24.4307C46.7539 24.6266 46.8001 24.8199 46.8895 24.9946C46.9789 25.1692 47.1091 25.3201 47.2691 25.4347C47.612 25.7025 48.0375 25.8444 48.4737 25.8363C49.1278 25.8352 49.7549 25.5766 50.2174 25.1172C50.7309 24.6372 50.9877 24.074 50.9877 23.4276C50.5043 23.0452 49.8303 22.8539 48.9657 22.8539C48.336 22.8539 47.8109 23.0047 47.3905 23.3062C46.9658 23.6122 46.755 23.9841 46.755 24.4307Z" fill="#5F6368" />
                                        <path d="M60.98 18.7413L55.8037 30.555H54.2035L56.1244 26.4214L52.7207 18.7413H54.4057L56.8658 24.6314H56.8995L59.2922 18.7413H60.98Z" fill="#5F6368" />
                                        <path d="M32.5888 21.0415C32.5894 20.5723 32.5494 20.104 32.4694 19.6416H25.9316V22.2931H29.6762C29.5995 22.7166 29.4374 23.1203 29.1994 23.4798C28.9614 23.8394 28.6526 24.1474 28.2916 24.3852V26.1064H30.5264C31.8349 24.9083 32.5888 23.1365 32.5888 21.0415Z" fill="#4285F4" />
                                        <path d="M25.9323 27.7691C27.8031 27.7691 29.3783 27.159 30.527 26.1072L28.2922 24.3861C27.6702 24.8049 26.8691 25.0439 25.9323 25.0439C24.1241 25.0439 22.5893 23.8334 22.0405 22.2021H19.7383V23.9759C20.3153 25.1161 21.2001 26.0746 22.2938 26.7445C23.3876 27.4143 24.6473 27.769 25.9323 27.7691Z" fill="#34A853" />
                                        <path d="M22.0404 22.2029C21.7502 21.3481 21.7502 20.4225 22.0404 19.5677V17.7939H19.7382C19.2528 18.7531 19 19.8118 19 20.8853C19 21.9588 19.2528 23.0174 19.7382 23.9766L22.0404 22.2029Z" fill="#FBBC04" />
                                        <path d="M25.9323 16.7256C26.9209 16.7096 27.8762 17.0805 28.5917 17.7583L30.5703 15.7933C29.3157 14.623 27.6535 13.9805 25.9323 14.0005C24.6473 14.0005 23.3876 14.3553 22.2938 15.0251C21.2001 15.6949 20.3153 16.6534 19.7383 17.7937L22.0405 19.5674C22.5893 17.9361 24.1241 16.7256 25.9323 16.7256Z" fill="#EA4335" />
                                    </svg>
                                    <svg width="80" height="46" viewBox="0 0 80 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="46" rx="8" fill="white" />
                                        <path d="M57.7202 17.1777H55.1779C54.4093 17.1777 53.8181 17.4142 53.4633 18.1828L48.6152 29.2388H52.0444C52.0444 29.2388 52.6356 27.7608 52.7538 27.406C53.1086 27.406 56.4786 27.406 56.9516 27.406C57.0698 27.8199 57.3654 29.1797 57.3654 29.1797H60.4398L57.7202 17.1777ZM53.6998 24.9229C53.9954 24.2134 55.0005 21.5528 55.0005 21.5528C55.0005 21.612 55.2961 20.8434 55.4144 20.4295L55.6509 21.4937C55.6509 21.4937 56.3012 24.3907 56.4195 24.982H53.6998V24.9229Z" fill="#3362AB" />
                                        <path d="M48.8517 25.2772C48.8517 27.7604 46.6051 29.4158 43.1168 29.4158C41.6387 29.4158 40.2198 29.1202 39.4512 28.7655L39.9242 26.0458L40.338 26.2232C41.4022 26.6962 42.1117 26.8736 43.4124 26.8736C44.3584 26.8736 45.3635 26.5188 45.3635 25.6911C45.3635 25.159 44.9496 24.8042 43.6489 24.213C42.4073 23.6218 40.7519 22.6758 40.7519 20.9612C40.7519 18.5963 43.0577 17 46.3094 17C47.551 17 48.6152 17.2365 49.2656 17.5321L48.7926 20.1335L48.5561 19.897C47.9649 19.6605 47.1963 19.424 46.073 19.424C44.8314 19.4832 44.2401 20.0153 44.2401 20.4883C44.2401 21.0204 44.9496 21.4342 46.073 21.9663C47.9649 22.8532 48.8517 23.8583 48.8517 25.2772Z" fill="#3362AB" />
                                        <path d="M20 17.2961L20.0591 17.0596H25.1437C25.8532 17.0596 26.3853 17.2961 26.5627 18.0647L27.686 23.3857C26.5627 20.5478 23.9612 18.242 20 17.2961Z" fill="#F9B50B" />
                                        <path d="M34.8401 17.1774L29.6964 29.1794H26.2081L23.252 19.1284C25.3804 20.4883 27.1541 22.6167 27.8044 24.0948L28.1592 25.3364L31.3518 17.1183H34.8401V17.1774Z" fill="#3362AB" />
                                        <path d="M36.2002 17.1182H39.4519L37.3826 29.1793H34.1309L36.2002 17.1182Z" fill="#3362AB" />
                                    </svg>
                                    <svg width="80" height="46" viewBox="0 0 80 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="46" rx="8" fill="white" />
                                        <path d="M33.7003 21.7031C33.5595 22.7593 32.7146 22.7593 31.9401 22.7593H31.5176L31.8697 20.7174C31.8697 20.5766 32.0105 20.5062 32.1513 20.5062H32.3625C32.9258 20.5062 33.4187 20.5062 33.7003 20.7878C33.7003 21.0694 33.7003 21.3511 33.7003 21.7031ZM33.3483 18.8867H30.3206C30.1094 18.8867 29.9686 19.0275 29.8982 19.2388L28.7012 26.9839C28.7012 27.1248 28.7716 27.2656 28.9828 27.2656H30.391C30.6023 27.2656 30.7431 27.1248 30.8135 26.9135L31.1655 24.8012C31.1655 24.59 31.3768 24.4492 31.588 24.4492H32.5738C34.5453 24.4492 35.6718 23.4634 36.0239 21.5623C36.1647 20.7174 36.0239 20.0837 35.6718 19.5908C35.1085 19.1684 34.334 18.8867 33.3483 18.8867Z" fill="#263577" />
                                        <path d="M40.319 24.5196C40.1782 25.3645 39.5445 25.9278 38.6996 25.9278C38.2771 25.9278 37.9251 25.787 37.7138 25.5053C37.5026 25.2237 37.4322 24.8716 37.5026 24.5196C37.6434 23.6747 38.2771 23.1114 39.1221 23.1114C39.5445 23.1114 39.8966 23.2522 40.1078 23.5338C40.2486 23.7451 40.3894 24.0971 40.319 24.5196ZM42.2905 21.7032H40.8823C40.7415 21.7032 40.6711 21.7736 40.6007 21.9144L40.5303 22.3369L40.4599 22.196C40.1782 21.7736 39.4741 21.5623 38.77 21.5623C37.1506 21.5623 35.8128 22.7593 35.5311 24.4492C35.3903 25.2941 35.6015 26.0686 36.0944 26.6319C36.5168 27.1248 37.1506 27.336 37.9251 27.336C39.1925 27.336 39.8966 26.4911 39.8966 26.4911L39.8262 26.9136C39.8262 27.0544 39.8966 27.1952 40.1078 27.1952H41.3752C41.5864 27.1952 41.7272 27.0544 41.7977 26.8431L42.5722 21.9144C42.5722 21.844 42.5018 21.7032 42.2905 21.7032Z" fill="#263577" />
                                        <path d="M49.9656 21.7032H48.4869C48.3461 21.7032 48.2053 21.7736 48.1349 21.9144L46.1634 24.8717L45.3184 22.0553C45.248 21.844 45.1072 21.7736 44.896 21.7736H43.4878C43.3469 21.7736 43.2061 21.9144 43.2765 22.1257L44.896 26.7728L43.4173 28.8851C43.2765 29.0259 43.4174 29.3076 43.6286 29.3076H45.1072C45.248 29.3076 45.3889 29.2372 45.4593 29.0963L50.2472 22.1257C50.3176 21.9144 50.1768 21.7032 49.9656 21.7032Z" fill="#263577" />
                                        <path d="M55.1046 21.7031C54.9638 22.7593 54.1189 22.7593 53.3444 22.7593H52.9219L53.2739 20.7174C53.2739 20.5766 53.4148 20.5062 53.5556 20.5062H53.7668C54.3301 20.5062 54.823 20.5062 55.1046 20.7878C55.175 21.0694 55.175 21.3511 55.1046 21.7031ZM54.7526 18.8867H51.7249C51.5137 18.8867 51.3729 19.0275 51.3025 19.2388L50.1055 26.9839C50.1055 27.1248 50.1759 27.2656 50.3871 27.2656H51.9361C52.077 27.2656 52.2178 27.1952 52.2178 26.9839L52.5698 24.8012C52.5698 24.59 52.7811 24.4492 52.9923 24.4492H53.9781C55.9496 24.4492 57.0761 23.4634 57.4282 21.5623C57.569 20.7174 57.4282 20.0837 57.0761 19.5908C56.5833 19.1684 55.8087 18.8867 54.7526 18.8867Z" fill="#2199D6" />
                                        <path d="M61.7936 24.5197C61.6528 25.3647 61.0191 25.928 60.1742 25.928C59.7517 25.928 59.3997 25.7871 59.1885 25.5055C58.9772 25.2239 58.9068 24.8718 58.9772 24.5197C59.118 23.6748 59.7517 23.1115 60.5967 23.1115C61.0191 23.1115 61.3712 23.2524 61.5824 23.534C61.7232 23.7452 61.864 24.0973 61.7936 24.5197ZM63.7651 21.7033H62.3569C62.2161 21.7033 62.1457 21.7737 62.0753 21.9146L62.0049 22.337L61.9345 22.1962C61.6528 21.7737 60.9487 21.5625 60.2446 21.5625C58.6252 21.5625 57.2874 22.7595 57.0057 24.4493C56.8649 25.2943 57.0761 26.0688 57.569 26.6321C57.9915 27.1249 58.6252 27.3362 59.3997 27.3362C60.6671 27.3362 61.3712 26.4912 61.3712 26.4912L61.3008 26.9137C61.3008 27.0545 61.3712 27.1954 61.5824 27.1954H62.8498C63.061 27.1954 63.2019 27.0545 63.2723 26.8433L64.0468 21.9146C64.0468 21.8441 63.906 21.7033 63.7651 21.7033Z" fill="#2199D6" />
                                        <path d="M65.4549 19.098L64.1875 26.9839C64.1875 27.1248 64.2579 27.2656 64.4692 27.2656H65.7365C65.9478 27.2656 66.0886 27.1248 66.159 26.9135L67.356 19.1684C67.356 19.0275 67.2856 18.8867 67.0743 18.8867H65.6661C65.5957 18.8867 65.5253 19.0275 65.4549 19.098Z" fill="#2199D6" />
                                        <path d="M16.1679 28.7447L16.3791 27.2661H15.8862H13.4219L15.1117 16.4933C15.1117 16.4933 15.1117 16.4229 15.1821 16.4229H15.2526H19.4068C20.7446 16.4229 21.7303 16.7045 22.2232 17.2678C22.4344 17.5494 22.5753 17.8311 22.6457 18.1127C22.7161 18.4648 22.7161 18.8168 22.6457 19.3097V19.5913L22.8569 19.7322C23.0681 19.8026 23.209 19.9434 23.3498 20.0842C23.561 20.2954 23.7018 20.5771 23.7018 20.9291C23.7722 21.2812 23.7722 21.7037 23.6314 22.1965C23.4906 22.7598 23.3498 23.1823 23.1385 23.6047C22.9273 23.9568 22.6457 24.2384 22.364 24.5201C22.0824 24.7313 21.6599 24.8721 21.3079 25.0129C20.8854 25.0834 20.4629 25.1538 19.9701 25.1538H19.618C19.4068 25.1538 19.1956 25.2242 18.9843 25.365C18.8435 25.5058 18.7027 25.7171 18.6323 25.9283V26.0691L18.2098 28.6743V28.7447V28.8151C18.2098 28.8151 18.2098 28.8151 18.1394 28.8151H16.1679V28.7447Z" fill="#263577" />
                                        <path d="M23.1392 19.3096C23.1392 19.38 23.1392 19.4504 23.0688 19.5208C22.5055 22.3372 20.6748 23.2526 18.2809 23.2526H17.0839C16.8022 23.2526 16.5206 23.4638 16.5206 23.7454L15.8869 27.6884L15.7461 28.815C15.7461 29.0262 15.8869 29.1671 16.0277 29.1671H18.2105C18.4921 29.1671 18.7033 28.9558 18.7033 28.7446V28.6038L19.1258 26.069V25.9282C19.1962 25.6465 19.4074 25.5057 19.6187 25.5057H19.9707C22.0831 25.5057 23.7025 24.6608 24.125 22.1964C24.3362 21.1402 24.1954 20.2953 23.7025 19.732C23.5617 19.5912 23.3504 19.4504 23.1392 19.3096Z" fill="#2199D6" />
                                        <path d="M22.5748 19.098C22.5044 19.098 22.434 19.0275 22.2932 19.0275C22.2228 19.0275 22.082 18.9571 22.0116 18.9571C21.6595 18.8867 21.3074 18.8867 20.9554 18.8867H17.7165C17.6461 18.8867 17.5757 18.8867 17.5053 18.9571C17.3645 19.0275 17.2236 19.1684 17.2236 19.3092L16.5195 23.6746V23.8155C16.5899 23.5338 16.8012 23.3226 17.0828 23.3226H18.2798C20.6738 23.3226 22.5044 22.3368 23.0677 19.5908C23.0677 19.5204 23.0677 19.45 23.1381 19.3796C22.9973 19.3092 22.8565 19.2388 22.7157 19.1684C22.6452 19.098 22.5748 19.098 22.5748 19.098Z" fill="#252C5E" />
                                        <path d="M17.2246 19.3093C17.2246 19.1685 17.3655 19.0277 17.5063 18.9572C17.5767 18.9572 17.6471 18.8868 17.7175 18.8868H20.9564C21.3084 18.8868 21.7309 18.8868 22.0126 18.9572C22.083 18.9572 22.2238 18.9572 22.2942 19.0277C22.3646 19.0277 22.435 19.0981 22.5758 19.0981C22.6463 19.0981 22.6463 19.0981 22.7167 19.1685C22.8575 19.2389 22.9983 19.3093 23.1391 19.3797C23.28 18.3236 23.1391 17.6194 22.5758 16.9857C21.9421 16.2816 20.8156 16 19.4074 16H15.2531C14.9715 16 14.6899 16.2112 14.6899 16.4929L13 27.3361C13 27.5473 13.1408 27.7586 13.3521 27.7586H15.8868L16.5205 23.6748L17.2246 19.3093Z" fill="#263577" />
                                    </svg>
                                    <svg width="80" height="46" viewBox="0 0 80 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="46" rx="8" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0004 21.6599C15.8903 21.9352 15.8352 22.2289 15.7618 22.5225C15.5783 23.4034 15.4315 24.3394 15.2296 25.2203C14.8258 25.2203 14.4037 25.2203 14 25.2203C14.4588 22.2472 15.303 19.3476 15.67 16.1543C16.0738 16.1543 16.4775 16.1543 16.8629 16.1543C16.8079 16.4479 16.7345 16.7232 16.6978 17.0169C16.6978 17.0352 16.6611 17.0536 16.6611 17.0903C17.2116 16.3745 18.0558 15.879 19.3955 16.0258C20.7169 16.1543 21.4326 17.2004 21.4877 18.43C21.6161 20.779 20.3682 22.9079 17.7989 22.7244C16.9547 22.6693 16.3124 22.3573 16.0004 21.6599ZM17.7255 17.2004C16.6427 17.7509 15.5966 20.2835 16.8262 21.3663C17.6337 22.082 18.9 21.6966 19.4322 21.036C20.0378 20.2835 20.5884 18.118 19.6708 17.3472C19.3588 17.0903 18.8633 16.9985 18.4045 17.0536C18.0742 17.0719 17.909 17.1086 17.7255 17.2004Z" fill="#030000" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1591 22.5956C26.7737 22.5956 26.3883 22.5956 25.9845 22.5956C26.0396 22.2285 26.113 21.8798 26.1864 21.5311C25.8377 22.045 25.2321 22.6323 24.3512 22.724C23.0849 22.8525 21.9287 22.2102 21.8186 21.1641C21.7819 20.8154 21.8002 20.2465 22.0939 19.806C22.828 18.6499 24.7366 18.5765 26.6269 18.6315C27.1958 16.5394 24.1493 16.8514 23.1032 17.5304C23.1583 17.1266 23.2501 16.7412 23.3051 16.3375C25.1954 15.7502 27.7463 15.897 27.8932 17.9341C27.9482 18.7416 27.7096 19.5308 27.5628 20.3016C27.416 21.054 27.2692 21.7881 27.1591 22.5956ZM23.1583 20.9255C23.195 21.4577 23.7823 21.7514 24.2594 21.7514C25.5624 21.7697 26.1864 20.6319 26.3883 19.5124C24.9201 19.439 23.0665 19.6225 23.1583 20.9255Z" fill="#030000" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9853 16.1729C30.2606 17.8796 30.5909 19.5313 30.8479 21.2747C31.8205 19.6047 32.7198 17.8612 33.6741 16.1729C34.1145 16.1729 34.555 16.1729 35.0138 16.1729C33.8393 18.3017 32.4629 20.6324 31.1415 22.8714C30.7378 23.5688 30.334 24.5047 29.7467 24.9635C29.2329 25.3673 28.2419 25.459 27.416 25.2939C27.4344 24.9268 27.5628 24.6515 27.5812 24.3028C27.7464 24.2845 27.9482 24.3946 28.1501 24.3946C29.0494 24.3946 29.5449 23.5688 29.8752 22.9264C29.4898 20.7058 29.0677 18.5036 28.6823 16.2646C28.6456 16.2279 28.664 16.2096 28.6823 16.1729C29.1228 16.1729 29.5632 16.1729 29.9853 16.1729Z" fill="#030000" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5463 26.3583C35.271 27.9182 34.9223 29.3864 34.647 30.9463C33.7845 30.9463 32.9219 30.9463 32.041 30.9463C32.4448 29.0377 32.7934 27.1474 33.1788 25.2571C33.5642 23.3852 34.023 21.5133 34.2433 19.5313C34.9407 19.4762 35.8766 19.4762 36.574 19.5313C36.5556 19.9717 36.4455 20.3388 36.4088 20.7609C37.0879 20.0818 37.8219 19.1826 39.3819 19.3294C40.8684 19.4762 41.6942 20.7242 41.8043 22.3024C42.0062 25.0186 40.6849 27.6796 38.2991 27.8631C36.8126 27.9733 36.1152 27.2942 35.5463 26.3583ZM36.5923 22.3024C35.9867 23.165 35.7849 24.8167 36.5556 25.459C37.0328 25.8628 37.9137 25.6609 38.3174 25.3305C38.8313 24.9085 39.1983 24.101 39.18 23.0916C39.1616 22.174 38.7579 21.4032 37.7852 21.5317C37.2163 21.6051 36.8676 21.8987 36.5923 22.3024Z" fill="#009651" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.9432 27.6975C48.2642 27.6792 47.4934 27.7342 46.8694 27.6608C46.9428 27.2938 46.9428 26.835 46.9979 26.4679C46.796 26.6698 46.6492 26.9634 46.3923 27.202C45.5481 27.9728 43.6578 28.138 42.7219 27.3672C41.7125 26.523 41.8777 24.5043 42.7219 23.6417C43.6945 22.6323 45.5297 22.3754 47.42 22.5773C47.6035 21.8065 47.0897 21.3293 46.4473 21.2376C45.5114 21.1091 44.2634 21.5129 43.7129 21.8432C43.823 21.1825 43.8597 20.4668 43.9882 19.8061C44.6488 19.5675 45.2728 19.384 46.0619 19.3473C48.2458 19.2005 49.7507 19.9346 49.8975 21.8065C49.9709 22.7975 49.6773 23.8252 49.4571 24.7979C49.2552 25.7522 49.1084 26.7249 48.9432 27.6975ZM46.3189 24.0271C45.5297 24.0455 44.6672 24.3024 44.4837 24.8897C44.3368 25.4035 44.7039 25.8807 45.0893 25.9541C46.3005 26.211 47.1264 25.0181 47.2181 24.0638C46.9428 24.0087 46.5391 24.0271 46.3189 24.0271Z" fill="#009651" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M56.9441 19.806C56.8156 20.4667 56.577 21.0173 56.4486 21.678C55.8062 21.4577 55.0354 21.1274 54.0261 21.2375C53.6223 21.2926 53.2186 21.4944 53.2186 21.8982C53.2369 22.3937 53.9894 22.5772 54.4482 22.7607C55.0905 23.036 55.8613 23.4031 56.1733 23.9536C56.7055 24.9079 56.1733 26.3027 55.6044 26.89C55.1272 27.3855 54.228 27.7892 53.3103 27.8626C52.1175 27.9544 50.8695 27.7342 49.8418 27.4589C49.9886 26.7798 50.1538 26.1559 50.3373 25.5319C51.0163 25.8072 51.7871 26.0641 52.8332 25.9724C53.3287 25.9173 53.8793 25.7521 53.8059 25.1649C53.7508 24.6877 53.0351 24.5225 52.5029 24.3023C51.5118 23.8986 50.7778 23.3847 50.7778 22.045C50.7778 19.2922 54.595 18.8334 56.9441 19.806Z" fill="#009651" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4409 19.8063C63.2941 20.4486 63.0922 21.0543 62.9087 21.6782C62.3031 21.4397 61.514 21.1277 60.5046 21.2378C60.1009 21.2745 59.6971 21.4764 59.6971 21.8985C59.7155 22.4123 60.6331 22.6876 61.0552 22.8711C61.9177 23.2382 62.7436 23.6419 62.8537 24.6329C62.9638 25.6056 62.56 26.3947 61.9911 26.9269C61.4589 27.4408 60.6698 27.7895 59.7889 27.8629C58.5776 27.9547 57.4031 27.7344 56.3203 27.4592C56.4304 26.7618 56.6507 26.1929 56.7791 25.5322C57.2746 25.679 57.7518 25.9176 58.339 25.9726C59.1649 26.046 60.2844 25.991 60.266 25.2752C60.2477 24.5045 58.651 24.3393 58.0271 23.8438C57.348 23.3116 56.9259 22.0086 57.4581 20.9441C58.339 19.2925 61.3672 18.9254 63.4409 19.8063Z" fill="#009651" />
                                        <path d="M64.4124 20.6509H64.082L64.1004 20.5225H64.9079L64.8895 20.6509H64.5592L64.3757 21.6603H64.2288L64.4124 20.6509Z" fill="#009651" />
                                        <path d="M65.7703 21.6603L65.8437 21.0546C65.8621 20.9445 65.8804 20.7794 65.8988 20.6692C65.8437 20.7794 65.7887 20.9262 65.7153 21.0363L65.3849 21.6603H65.2748L65.183 21.0546C65.1647 20.9262 65.1463 20.7977 65.1463 20.6692C65.128 20.7794 65.0913 20.9445 65.0546 21.0546L64.9078 21.6603H64.7793L65.0729 20.5224H65.2565L65.3482 21.1648C65.3666 21.2565 65.3666 21.3666 65.3666 21.4584C65.4033 21.3666 65.4583 21.2749 65.495 21.1831L65.8437 20.5224H66.0272L65.8804 21.6603H65.7703Z" fill="#009651" />
                                    </svg>
                                </div>

                                <div className={styles.profilerow}>
                                    <div className={styles.profileformGroup}>
                                        <input
                                            type="text"
                                            name="zip"
                                            placeholder="Card Number"
                                            required
                                        />
                                    </div>
                                    <div className={styles.profileformGroup} >
                                        <input
                                            type="text"
                                            name="date"
                                            placeholder="Name of card"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.profilerow}>
                                    <div className={styles.profileformGroup}>
                                        <input
                                            type="text"
                                            name="cvv"
                                            placeholder="Expiration date (MM/YY)"
                                            required
                                        />
                                    </div>
                                    <div className={styles.profileformGroup}>
                                        <input
                                            type="text"
                                            name="cvv"
                                            placeholder="Security Code"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.hline2}></div>

                            <div className={styles.paymentOption} style={{ border: 'none', margin: "10px 0px" }}>
                                <div>
                                    <input
                                        type="radio"
                                        id="creditCard"
                                        name="paymentMethod"
                                        value="creditCard"
                                    /*   checked={paymentMethod === "creditCard"}
                                      onChange={handlePaymentChange} */
                                    />
                                    <label htmlFor="creditCard" className={styles.paymentLabel}>Cash on delivery</label>
                                </div>
                            </div>

                            <div className={styles.hline2}></div>

                            <div className={styles.paymentOption} style={{ border: 'none' }}>
                                <div>
                                    <input
                                        type="radio"
                                        id="creditCard"
                                        name="paymentMethod"
                                        value="creditCard"
                                    /*   checked={paymentMethod === "creditCard"}
                                      onChange={handlePaymentChange} */
                                    />
                                    <label htmlFor="creditCard" className={styles.paymentLabel}>Paypal</label>
                                </div>
                            </div>
                            <button className={styles.payButton}>Proceed to Checkout</button>
                        </div>
                    </form>
                </div>
            </div>



            <div className={styles.orderSummary}>
                <div className={styles.Order}>Order Summary</div>
                <span>All transactions are secure and encrypted.</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className={styles.summaryItem}>
                        <span>Price</span>
                        <span>Rs </span>
                    </div>
                    <div className={styles.summaryItem}>
                        <span>Discount</span>
                        <span>Rs </span>
                    </div>
                    <div className={styles.summaryItem}>
                        <span className={styles.priceSummary}>Coupon discount</span>
                        <span className={styles.coupon}>Apply coupon</span>
                    </div>
                    <div className={styles.summaryItem} style={{ borderBottom: '1px solid #D1D1D8', paddingBottom: '20px' }}>
                        <span className={styles.priceSummary}>Shipping</span>
                        <span className={styles.FreeSummary}>Free</span>
                    </div>
                    <div className={styles.summaryTotal}>
                        <span>Total</span>
                        <span>Rs </span>
                    </div>
                    <div className={styles.summaryItem}>
                        <span className={styles.priceSummary}>Estimated Delivery by</span>
                        <span className={styles.bold}> 01 Jun, 2024</span>
                    </div>
                </div>
                <button className={styles.checkoutButton}>Proceed to Checkout</button>





            </div>
        </div>
    )
}

export default Checkout