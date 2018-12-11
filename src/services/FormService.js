
export function handleChange({ target }) {
  const { name, value } = target;
  this.setState({
    [name]: value,
  });
}

export function handleTick({ target }) {
  const { name, checked } = target;
  this.setState({
    [name]: checked,
  });
}
