import { useState } from 'react';

export const useSearchForm = () => {
    const [email, setEmail] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setEmail(e.currentTarget.value);
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setTitle(e.currentTarget.value);
    const onChangePrice = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setPrice(e.currentTarget.value);
    const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setDescription(e.currentTarget.value);

    return {
        email,
        price,
        title,
        description,
        onChangeEmail,
        onChangeTitle,
        onChangePrice,
        onChangeDescription,
    };
};
