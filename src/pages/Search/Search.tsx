import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import './Search.css';

const Search = () => {
    const navigate = useNavigate();
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/profile');
    }

    return (
        <section className='Search'>
            <form className='Search-Form' onSubmit={(e) => handleSearchSubmit(e)}>
                <input className='Search-Form__input' placeholder='Search with your account name'/>
            </form>  
        </section>
    )
}
export default Search;