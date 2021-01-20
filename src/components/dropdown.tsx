import React, { useState } from 'react';

type itemProps = {
  id: number;
  title: string;
  selected: boolean;
}[];

type DropProps = {
  category: string;
  items: itemProps;
  onChange: (title: string, id: number) => void;
};

export default function Dropdown({ category, items, onChange }: DropProps) {
  const [listOpen, setListOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(category);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const selectItem = (title: string, id: number) => {
    setSelectedItem(title);
    onChange(title, id);
    setListOpen(false);
  };

  const onKeyPressHandler = () => {
    console.log(`누름`);
  };

  return (
    <div className="dd-box">
      <div className="dd-wrapper">
        <div
          className={`dd-header ${listOpen && ` on`}`}
          role="menuitem"
          tabIndex={0}
          onKeyPress={onKeyPressHandler}
          onClick={() => toggleList()}
        >
          {selectedItem}
        </div>
        {listOpen && (
          <ul
            className="dd-list"
            role="presentation"
            onClick={(e) => e.stopPropagation()}
          >
            {items.map((item: any) => (
              <li
                key={item.id}
                className={`dd-list-item ${item.selected && ` selected`}`}
                role="menuitem"
                tabIndex={0}
                onKeyPress={onKeyPressHandler}
                onClick={() => selectItem(item.title, item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
