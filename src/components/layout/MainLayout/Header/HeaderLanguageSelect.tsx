const HeaderLanguageSelect = () => {
  // TODO: Customize
  return (
    <div className="max-sm:hidden">
      <select
        className="bg-background-header text-header-item-color"
        name="lang"
        id="lang"
      >
        <option value="en">
          {/*<img src="/images/flags/us-flag.jpg" alt="USA" />*/}
          English
        </option>
        <option value="ru">
          {/*<img src="/images/flags/russian-flag.jpg" alt="Russia" />*/}
          Russian
        </option>
      </select>
    </div>
  );
};

export default HeaderLanguageSelect;
