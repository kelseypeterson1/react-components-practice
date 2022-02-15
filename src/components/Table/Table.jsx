function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Owner</th>
                    <th>Due Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Clean Fridge</td>
                    <td>Kelsey</td>
                    <td>02/20/2022</td>
                    <td><button class="btn-complete">Complete</button></td>
                </tr>
                <tr>
                    <td>Bake 19 Cakes</td>
                    <td>Kelsey</td>
                    <td>03/01/2022</td>
                    <td><button class="btn-complete">Complete</button></td>
                </tr>
                <tr>
                    <td>Watch LOTR Trilogy</td>
                    <td>Kelsey</td>
                    <td>12/31/2022</td>
                    <td><button class="btn-delete">Delete</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;