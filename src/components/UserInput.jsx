import { use } from "react";
import { useState } from "react";

function handleChange(e){
    console.log(e.target.id, ": ", e.target.value);
}


function UserInput(){
    return (
        <div id="user-input">
            <div class="input-group">
                <div>
                    <label for="initial-investment">INITIAL INVESTMENT</label>
                    <input type="number" id="initialInvestment" name="initial-investment" onChange={handleChange} placeholder="0" />
                </div>
                <div>
                    <label for="annual-investment">ANNUAL INVESTMENT</label>
                    <input type="number" id="annualInvestment" name="annual-investment" placeholder="0" />
                </div>
            </div>

            <div class="input-group">
                <div>
                    <label for="expected-return">EXPECTED RETURN</label>
                    <input type="number" id="expectedReturn" name="expected-return" placeholder="0" />
                </div>
                <div>
                    <label for="duration">DURATION</label>
                    <input type="number" id="duration" name="duration" placeholder="0" />
                </div>
            </div>
        </div>
    );
}

export default UserInput;