
export function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
        [name]: value
    });
}

export function handleTick(event) {
	const target = event.target;
    const name = target.name;
    const checked = target.checked;

    this.setState({
        [name]: checked
    });
}
