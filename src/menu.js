const renderMenuPage = (() => {
  //container
  const contentContainer = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.setAttribute("data-tab-content", "");
  menu.innerHTML = `
  <div class="hero">
  <h1>Menu</h1>
  <img src="./images/chef.png" alt="" width="50" height="50" />
</div>
<div class="menu-container">
  <div class="menu-item">
    <img src="./images/hamburger.png" alt="" />
    <div class="item-content">
      <h4>Hamburger: <span>1000/=</span></h4>
      <p>
        Buns, patty, tomato, onions, lettuce, and our secret family
        recipe.
      </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/cheeseburger.png" alt="" />
    <div class="item-content">
      <h4>Pizza: <span>1200/=</span></h4>
      <p>Similar to our hamburger, but with cheese.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/double-cheeseburger.png" alt="" />
    <div class="item-content">
      <h4>Double Cheeseburger: <span>450/=</span></h4>
      <p>Similar to our cheeseburger, but with an extra patty.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/steak.png" alt="" />
    <div class="item-content">
      <h4>Steak: <span>600/=</span></h4>
      <p>A juicy steak made just how you like it.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/ribs.png" alt="" />
    <div class="item-content">
      <h4>BBQ Ribs: <span>1000/=</span></h4>
      <p>Barbecue ribs with your choice of a add-ons.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/grilled-cheese.png" alt="" />
    <div class="item-content">
      <h4>Grilled Chicken: <span>750/=</span></h4>
      <p>
        A toasted and grilled cheese chicken, dipped in our special
        sauce.
      </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/caesar-salad.png" alt="" />
    <div class="item-content">
      <h4>Burger: <span>350/=</span></h4>
      <p>
        Your typical burger that comes with your choice of
        dressings.
      </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/french-fries.png" alt="" />
    <div class="item-content">
      <h4>French Fries: <span>$1.99</span></h4>
      <p>
        Sometimes you don't want to eat your burger alone, why not add
        some french fries?
      </p>
    </div>
  </div>
</div>`;

  contentContainer.appendChild(menu);
})();

export { renderMenuPage };
