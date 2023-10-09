import { useRef, useEffect } from "react";

export const SECTION_LIST_MOCK_DATA = [
  {
    title: "Appetizers",
    data: [
      {
        id: "1",
        title: "Pasta",
        price: "10",
      },
      {
        id: "3",
        title: "Pizza",
        price: "8",
      },
    ],
  },
  {
    title: "Salads",
    data: [
      {
        id: "2",
        title: "Caesar",
        price: "2",
      },
      {
        id: "4",
        title: "Greek",
        price: "3",
      },
    ],
  },
];

export function getSectionListData(data) {
  const mocData = [];
  data.forEach((ele) => {
    isMatched = false;
    mocData.forEach((ele1) => {
      if (ele1.title == ele.category) {
        ele1.data = [
          ...ele1.data,
          {
            id: ele.id,
            title: ele.title,
            price: ele.price,
          },
        ];
        isMatched = true;
      }
    });
    if (!isMatched) {
      mocData.push({
        title: ele.category,
        data: [{ id: ele.id, title: ele.title, price: ele.price }],
      });
    }
  });
  return mocData;
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
