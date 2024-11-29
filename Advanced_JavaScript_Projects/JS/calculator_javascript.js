
// Created Object that keeps track of the values
const Calculator = 
{
    /**
     * This will display a constant zero (0), on the 
     * calculator screen
     */
    Display_Value: '0',

    /**
     * This will hold the first operand of any expressions.
     * I will set it null for now
     */
    First_Operand: null,

    /**
     * This will check whether or not the second operand has
     * been inputted by the user
     */
    Wait_Second_Operand: false,

    // This will hold the operator. I will set it to "null" for now
    operator: null,
};




/**                 ---- MODIFY_VALUES_FUNCTION ---- 
 * This function midofies values each time a button 
 * is clicked
*/
function inputDigit( digit )
{
    const{ Display_Value, Wait_Second_Operand } = Calculator;

    /**
     * This checks if the "waitSecondOperand" is true, and 
     * if it is, it sets the displayValue to the said key
     * that was clicked on.
     */
    if ( Wait_Second_Operand === true )
    {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else 
    {
        /**
         * This overwrites displayValue if the current value
         * is zero (0). Otherwise it adds onto it
         */
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}


// This function handles decimal points
function inputDecimal( dot )
{
    /**
     * This code insures that accidental clicking of the decimal
     * point does not cause bugs to the math operation
     */
    if ( Calculator.Wait_Second_Operand === true )
    {
        return;
    }
    if (!Calculator.Display_Value.includes( dot ) )
    {
        /**
         * ABOVE_SECOND_IF_STATEMENT: Here what I am saying is that 
         * if the displayValue does not contain a decimal point. 
         * BOTTOM_CODE: I wnat JS to go ahead and add a decimal point
         */
        Calculator.Display_Value += dot;
    }
}


// This function handles operators
function handleOperator( Next_Operator )
{
    const { First_Operand, Display_Value, operator } = Calculator;

    /**
     * when an operator key is pressed I'm converting the current
     * number displayed on the screen to a number and assigning the
     * results to calculator.firstOperand if it doesn't already exist
     */
    const Value_Of_Input = parseFloat( Display_Value );

    /**
     * Checks if an operator already exists and if "waitSecondOperand",
     * is true. Then updates the operator and exits from the function
     */
    if ( operator && Calculator.Wait_Second_Operand )
    {
        Calculator.operator = Next_Operator;

        return;
    }
    if ( First_Operand == null )
    {
        Calculator.First_Operand = Value_Of_Input;
    }
    // Checks if an operator already exists
    else if ( operator )
    {
        const Value_Now = First_Operand || 0;

        /**
     * If operator exists, property lookup is performed for the 
     * operator in the performCalculation object and the function
     * that matches the operator is executed. 
     */
    let result = Perform_Calculation[ operator ]( Value_Now, Value_Of_Input );

    // Here I add a fixed amount of numbers after the decimal
    result = Number( result ).toFixed ( 9 );

    // This removes any trailing 0s
    result = ( result * 1 ).toString();

    Calculator.Display_Value = parseFloat( result );
    Calculator.First_Operand = parseFloat( result );
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = 
{
    '/': ( First_Operand, Second_Operand ) => First_Operand / Second_Operand,
    '*': ( First_Operand, Second_Operand ) => First_Operand * Second_Operand,
    '+': ( First_Operand, Second_Operand ) => First_Operand + Second_Operand,
    '-': ( First_Operand, Second_Operand ) => First_Operand - Second_Operand,
    '=': ( First_Operand, Second_Operand ) => Second_Operand
};

function calculatorReset()
{
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

/**                 ---- UPDATE_SCREEN_FUNCTION ----
 * This function updates the calculator screen with the 
 * contents of the Display_Value
 */
function updateDisplay()
{
    /**
     * Makes use of the calculator-screen class to 
     * target the input tag in the HTML document
     */
    const display = document.querySelector( ".calculator-screen" );
    display.value = Calculator.Display_Value;
}

updateDisplay();

const keys = document.querySelector( ".calculator-keys" );

// This section monitors all button clicks
keys.addEventListener( 'click', ( event ) => 
{
    /**
     * The "target" variable is an object that represents the 
     * element that was clicked.
     */
    const { target } = event;

    /**
     * If the element that was clicked on is "Not" a button.
     * Exit the function
     */
    if ( !target.matches( 'button' ) )
    {
        return;
    }
    if ( target.classList.contains( 'operator' ) )
    {
        handleOperator( target.value );

        updateDisplay();

        return;
    }
    if (target.classList.contains( 'decimal' ) )
    {
        inputDecimal( target.value );

        updateDisplay();

        return;
    }
    /**
     * This piece of code ensures that "All-Clear (AC)". Clears
     * all inputs from the calculator screen
     */
    if ( target.classList.contains( 'all-clear' ) )
    {
        calculatorReset();

        updateDisplay();

        return;
    }

    inputDigit( target.value );

    updateDisplay();
})
