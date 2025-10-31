import { use } from "react";
import { useState } from "react";




function UserInput({userUpdate}){
    function handleChange(event) {
        userUpdate(event.target.name, event.target.value);
    }
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
                    <input type="number" name="initialInvestment" onChange={handleChange} placeholder="0" />
                </div>
                <div>
                    <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
                    <input type="number" name="annualInvestment" onChange={handleChange} placeholder="0" />
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label htmlFor="expectedReturn">EXPECTED RETURN</label>
                    <input type="number" name="expectedReturn" onChange={handleChange} placeholder="0" />
                </div>
                <div>
                    <label htmlFor="duration">DURATION</label>
                    <input type="number" name="duration" onChange={handleChange} placeholder="0" />
                </div>
            </div>
        </div>
    );
}

export default UserInput;