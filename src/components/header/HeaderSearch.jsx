import React from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export default function HeaderSearch() {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        focusBorderColor="none"
        borderRadius={"20px"}
        type="tel"
        placeholder="Dilediğiniz şeyi aratın"
      />
    </InputGroup>
  );
}
