import React, { useState } from "react";
import { TodosCollection } from "../../../api/todos";
import "./styles.css";


export const TodoTableRow = (props) => {
  const { element, index, onRowClick, onDeleteClick } = props;
  const { title, progress, deadline } = element;
  useState;


  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{title}</td>
      <td>{deadline}</td>
      <td>{progress}</td>
      <td>
        <button
          className="btn btn-success btn-sm"
          onClick={() => onRowClick(element)}
        >
          Edit
        </button>
      </td>
      <td>
        <button 
        className="btn btn-danger btn-sm" 
        onClick={() => onDeleteClick(element)}
        >
          Löschen
        </button>
      </td>
    </tr>
  );
};
