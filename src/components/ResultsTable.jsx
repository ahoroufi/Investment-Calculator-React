import { formatter } from "../util/investment";

function ResultsTable({results}) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
               { results.map(result => 
                <tr>
                    <td>{(result.year)}</td>
                    <td>{formatter.format(result.valueEndOfYear)}</td>
                    <td>{formatter.format(result.interest)}</td>
                    <td>{formatter.format(result.annualInvestment)}</td>
                </tr>
                )}
            </tbody>
        </table>
    );
}

export default ResultsTable;