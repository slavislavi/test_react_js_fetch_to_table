import React from "react";

export const UserItem = ({
  userData: { id, name, username, email, address, company, website },
  onDelete,
}) => {
  const onDeleteClick = () => onDelete(id);

  return (
    <tr className="row">
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{address.city}</td>
      <td>{company.name}</td>
      <td>
        <a href={`https://${website}`} target="_blank" rel="noreferrer">
          {website}
        </a>
      </td>
      <td>
        <button className="delete" onClick={onDeleteClick}>
          ✗
        </button>
      </td>
    </tr>
  );
};
