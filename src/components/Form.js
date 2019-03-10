import React from 'react';
import arrow from '../style/images/svg/right-arrow.svg';

const isEmpty = (inputField) => {
    return !inputField;
};

export default class Form extends React.Component {
    state = {
        error: undefined
    };

    render = (props) => {
        return (
            <div>
                <h3 className="form__title center">Enter a location</h3>
                <div className="form--error-container">
                    {this.state.error && <p className="form--error center">{this.state.error}</p>}
                </div>
                <form className="input-container" onSubmit={(e) => {
                    e.preventDefault();
                    
                    //Makes sure input field isn't blank.
                    //Otherwise, carry on through.
                    let city = e.target.elements.city.value.trim();
                    if (city.length <= 0)
                        this.setState(() => ({error: "Please enter a valid address!"}));
                    else
                        this.props.calculateLocation(city);

                    //Clears input field after submitting form.
                    e.target.elements.city.value = '';
                }}>
                    <input className="form__input" type="text" name="city" />
                    <button className="input__button"><img className="input__button--img" src={arrow} /></button>
                </form>
            </div>
        );
    }
}