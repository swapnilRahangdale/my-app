
        const Add = (xyz) => {
        console.log('xyz',xyz);
        return(
            <div>
                <p>This is Add Component</p>
                <p>Addition = {parseInt(xyz.a) + parseInt(xyz.b)}</p>
            </div>
        )

}

export default Add;