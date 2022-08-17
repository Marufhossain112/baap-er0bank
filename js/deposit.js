// add eventListener to the deposit button
document
  .getElementById("deposit-submit")
  .addEventListener("click", function () {
    const newDepositAmount = getInputValueById("user-deposit-input");
    // console.log("newAmount", newDepositAmount);
    const previousDepositAmount = getValueFromInnerText(
      "user-deposit-innerText"
    );
    // console.log("previousAmount", previousDepositAmount);
    const previousTotalDepositAmount = newDepositAmount + previousDepositAmount;
    // console.log("totalAmount", previousTotalDepositAmount);
    setTheElementsToTheDom(
      "user-deposit-innerText",
      previousTotalDepositAmount
    );

    // increase the balance amount also
      const currentBalanceAmount = getValueFromInnerText('user-balance-innerText');
      // console.log(currentBalance);
      const newBalanceAmount = currentBalanceAmount + newDepositAmount;
      // set balance amount
      setTheElementsToTheDom(
        "user-balance-innerText",
        newBalanceAmount
      );
  });
