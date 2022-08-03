import React from "react";
import Button from "./Button";

export default {
   title: "Ex/Button",
   component: Button,

}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
   label: "My button"
}