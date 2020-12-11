import React from 'react';

const Form = () => {
    return (
        <div className="section">
            <form action="">
                <h5 className="grey-text">New Note</h5>
                    <div class="input-field">
                        <input id="first_name" type="text" class="validate" />
                        <label for="first_name">First Name</label>
                    </div> 
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Textarea</label>
            </form>
            
        </div>
    );
};

export default Form;
