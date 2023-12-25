import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm)

    // const { username, email, password } = formState;

    const onInputChane = ( { target } ) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setformState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChane,
        onResetForm
    }
}
