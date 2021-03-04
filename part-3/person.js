const person = (props) => {
    let vote = props.age >= 18 ? 'Please Go Vote!': 'You must be 18'
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)
    return (
        <div>
            <p> Learn more some information about this person.</p>
            <ul>
                <li>name:{props.name.slice(0,5)}</li>
                <li>age:{props.age}</li>
                <ul>
                    Hobbies:{hobbies}
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>

    );
}