import { Button } from '@mui/material';
import { createBankApi } from 'api/enums';
import { FeedbackContext } from 'context/FeedbackContext';
import { RefetchContext } from 'context/RefetchContext';
import React, { useContext, useState } from 'react';
import useApi from 'utils/hooks/useApi';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const BankModal = ({ setOpen }) => {
    const [createApi] = useApi({ successMsg: true, errMsg: true })
    const [state, setState] = useState({
        name: '',
        contactNumber: ''
    })
    const [getEnums] = useRefetchEnums()

    const onChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        createApi(createBankApi(state), () => {
            getEnums()
            setOpen()
        })
    }

    return <form className="space-y-5" onSubmit={onSubmit}>
        <TextFieldSimple label="Bank Name" name="name" onChange={onChange} />
        <TextFieldSimple label="Bank Account Number" name="accountNumber" onChange={onChange} />

        <Button variant="contained" type="submit">Add</Button>
    </form>
};

export default BankModal;
