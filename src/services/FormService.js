
export function handleChange({ target: { name, value } }) {
  this.setState({
    [name]: value,
  });
}

export function handleTick({ target: { name, checked } }) {
  this.setState({
    [name]: checked,
  });
}
