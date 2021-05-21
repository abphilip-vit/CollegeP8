const Column = ({ eventData }) => {
    const list = eventData.map( ev => {
            return <div>
            <ul>
                <li>Latitude: <strong>{ev[0] }</strong></li>
                <li>Longitude: <strong> {ev[1]} </strong></li>
            </ul>
            </div>
    })

    return <div className="column-data">
        {list}
    </div>
}

export default Column;
