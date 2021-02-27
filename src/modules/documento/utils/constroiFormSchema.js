export const constroiFormSchema = controlesItems => {
  console.log(controlesItems);
  let properties = {};
  properties["options"] = {
    locale: "fr"
  };
  controlesItems.forEach(item => {
    properties[item.tituloItemDocumento] = constroiItemProperty(item);
  });
  console.log(properties);

  return {
    type: "object",
    properties: properties
  };
};

const constroiItemProperty = controleItem => {
  switch (controleItem.tipoItem) {
    case "BOOLEAN":
      return {
        type: "boolean",
        "x-display": "switch",
        title: controleItem.tituloItemDocumento
      };
    case "STRING":
      return {
        type: "string",
        title: controleItem.tituloItemDocumento
      };
    case "DOUBLE":
      return {
        type: "text",
        title: controleItem.tituloItemDocumento
      };
    case "INTEGER":
      return {
        type: "number",
        title: controleItem.tituloItemDocumento
      };
    case "DATAHORA":
      return {
        type: "string",
        format: "date-time",
        title: controleItem.tituloItemDocumento,
        "x-options": {
          locale: "pt-br"
        }
      };
  }
};
