const data = [
  {
    index: 10,
    isViewable: true,
    item: {job: "Sokoke", key: "4a0e087a-b183-4652-80de-93c9d993c798"},
    key: "4a0e087a-b183-4652-80de-93c9d993c798",
  },
  {
    index: 11,
    isViewable: true,
    item: {job: "Himalayan", key: "cf227080-73de-42c0-aad5-b679601b5c16"},
    key: "cf227080-73de-42c0-aad5-b679601b5c16",
  },
  {
    index: 12,
    isViewable: true,
    item: {job: "LaPerm", key: "1d3c924c-a9ce-4561-a1de-cb66d4624ed4"},
    key: "1d3c924c-a9ce-4561-a1de-cb66d4624ed4",
  },
  {
    index: 13,
    isViewable: true,
    item: {job: "Nebelung", key: "89a537e0-f357-4de4-8205-042b1445e574"},
    key: "89a537e0-f357-4de4-8205-042b1445e574",
  },
  {
    index: 14,
    isViewable: true,
    item: {job: "American Curl", key: "c46401dd-46b6-458c-b9d9-818f15646680"},
    key: "c46401dd-46b6-458c-b9d9-818f15646680",
  },
  {
    index: 15,
    isViewable: true,
    item: {job: "Himalayan", key: "4364c066-28db-49e0-92f7-3f955fc4a0da"},
    key: "4364c066-28db-49e0-92f7-3f955fc4a0da",
  },
  {
    index: 16,
    isViewable: true,
    item: {job: "Korat", key: "4393f3ba-4516-47df-aea4-3e0efcd0d4f3"},
    key: "4393f3ba-4516-47df-aea4-3e0efcd0d4f3",
  },
  {
    index: 17,
    isViewable: true,
    item: {job: "Oriental", key: "e72c1b50-c95d-4a00-858b-55e6f66d61e9"},
    key: "e72c1b50-c95d-4a00-858b-55e6f66d61e9",
  },
];
function getMiddleItem() {
  const length = data.length - 1;
  console.log("length", length);
  const middleIndex = Math.floor(length / 2);
  const middle = data[middleIndex];
  return middle;
}

const middleItem = getMiddleItem();

console.log(middleItem);
