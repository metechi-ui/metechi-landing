import css from "styled-jsx/css";

import { colors, breakpoints } from "./theme";

const field = css.global`

.field{
  position: relative;
  font-size: 1.8rem;
  border: none;
  margin-bottom: 50px;
  width: 100%;
}

@media (${breakpoints.sm}) {          
  .field:not(.textarea) {
    width: 47%;
    margin-bottom: 60px;
  }
}

.field:before, .field:after{
  content: '';
  position: absolute;
  top: 100%;
  height: 1px;
  width: 100%;
  left: 0;
}
.field:before{
  background-color: ${colors.lightGrey};
}
.field:after{
  background-color: ${colors.blue};
  transition: transform .7s;
  transform-origin: right;
  transform: scaleX(0);
}
.form-fields :global(.field) {
  margin-bottom: 50px;
}



.field input, .field select, .field textarea{
  -webkit-appearance: none;
  width: 100%;
  color: ${colors.darkGrey};
  display: block;
  font-size: inherit;
  font-weight: 500;
  font-family: $font-body;
  background-color: transparent;
  padding: 15px 0;
  box-shadow: none;
  border-radius 0;
  transition: opacity 0.1s;
}

.field input::-webkit-input-placeholder, 
.field select::-webkit-input-placeholder, 
.field textarea::-webkit-input-placeholder {
  color: inherit; 
  font-family: inherit;
  font-size: inherit;
  font-weight: 300; 
}

.field textarea{
  height: 160px;
  width: 100%;
  transition: height .3s;    
  resize: none; 
  overflow: hidden;      
}
.field textarea:focus{
  height: 220px;
} 
.field.select{
  position: relative;
} 
.field.select .icon{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  pointer-events: none;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${colors.darkGrey};
} 

.field label{
  pointer-events: none;
  position: absolute; 
  left: 0;
  color: ${colors.darkGrey};
  top: 15px;  
  font-weight: 300;    
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  transition: all .2s;
  max-width: calc(100% - 25px);
}

.field.required label{
  padding-left: 10px;
}
.field.required label .req{
  position: absolute;
  top: 25%;
  font-size: 65%;
  //color: ${colors.red};
  left: 0;
  transition: opacity .2s;
}
.field.required.active label{
  padding-left: 0;          
}
.field.required.active label .req{
  opacity: 0;
}

.field input[type=number]::-webkit-inner-spin-button, 
.field input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}


.field.active label{
  top: -8px;
  font-size: 80%;
  font-weight: 500;
  color: #6f7784;
} 
.field.active textarea{
  height: 140px;   
  overflow-y: auto;  
}  

.field.active:after, .field.focused:after{                   
  transform: scaleX(1);
  transform-origin: left;
} 

.field.error {
    border-color: ${colors.red}; !important;
}
  
`;

export default field;
