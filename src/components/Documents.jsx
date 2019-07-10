import React from "react";
import Document from "./Document";

const Documents = ({ documents }) =>
  documents && documents.length > 0 ? (
    documents.map(document => <Document document={document} />)
  ) : (
    <span>Dieser Nutzer wart seine Geheimnisse</span>
  );

export default Documents;
