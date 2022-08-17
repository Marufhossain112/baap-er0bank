// add eventListener to the Withdraw button
document
  .getElementById("withdraw-submit")
  .addEventListener("click", function () {
    const newWithdrawAmount = getInputValueById("user-withdraw-input");
    // console.log("newAmount", newWithdrawAmount);
    const previousWithdrawAmount = getValueFromInnerText(
      "user-withdraw-innerText"
    );
    // console.log("previousAmount", previousWithdrawAmount);
    const previousTotalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    // console.log("totalAmount", previousTotalWithdrawAmount);
    setTheElementsToTheDom(
      "user-withdraw-innerText",
      previousTotalWithdrawAmount
    );

    // increase the balance amount also
      const currentBalanceAmount = getValueFromInnerText('user-balance-innerText');
      // console.log(currentBalance);
      const newBalanceAmount = currentBalanceAmount - newWithdrawAmount;
      // set balance amount
      setTheElementsToTheDom(
        "user-balance-innerText",
        newBalanceAmount
      );
  });
