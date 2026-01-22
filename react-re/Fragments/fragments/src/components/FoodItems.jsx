const FoodItems = ({ items }) => {
  return (
    <ul class="list-group">
      {Items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
