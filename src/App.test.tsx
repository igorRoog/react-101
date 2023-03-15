import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { App } from './App';

test('renders', () => {
  const { container } = render(<App />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="MuiContainer-root MuiContainer-maxWidthLg css-16dwyet-MuiContainer-root"
      >
        <div
          class="MuiBox-root css-wl0ejl"
        >
          <div
            class="MuiFormControl-root MuiTextField-root css-xkunfu-MuiFormControl-root-MuiTextField-root"
          >
            <div
              class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl css-v4u5dn-MuiInputBase-root-MuiInput-root"
            >
              <input
                aria-invalid="false"
                class="MuiInputBase-input MuiInput-input css-1x51dt5-MuiInputBase-input-MuiInput-input"
                id="outlined-basic"
                placeholder="Task name"
                type="text"
                value=""
              />
            </div>
          </div>
          <button
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-sghohy-MuiButtonBase-root-MuiButton-root"
            tabindex="0"
            type="button"
          >
            Add
            <span
              class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
            />
          </button>
        </div>
        <div
          class="MuiBox-root css-1i6fvs5"
        >
          <div
            class="MuiBox-root css-0"
          >
            <label
              class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-j204z7-MuiFormControlLabel-root"
            >
              <span
                class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root"
              >
                <input
                  class="PrivateSwitchBase-input css-1m9pwf3"
                  data-indeterminate="false"
                  type="checkbox"
                />
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                  data-testid="CheckBoxOutlineBlankIcon"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
                <span
                  class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                />
              </span>
              <span
                class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-ahj2mt-MuiTypography-root"
              >
                Task1
              </span>
            </label>
          </div>
          <div
            class="MuiBox-root css-0"
          >
            <label
              class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-j204z7-MuiFormControlLabel-root"
            >
              <span
                class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root"
              >
                <input
                  class="PrivateSwitchBase-input css-1m9pwf3"
                  data-indeterminate="false"
                  type="checkbox"
                />
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                  data-testid="CheckBoxOutlineBlankIcon"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
                <span
                  class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                />
              </span>
              <span
                class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-ahj2mt-MuiTypography-root"
              >
                Task2
              </span>
            </label>
          </div>
        </div>
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1rwt2y5-MuiButtonBase-root-MuiButton-root"
          tabindex="0"
          type="button"
        >
          Clear task list
          <span
            class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
          />
        </button>
      </div>
    </div>
  `);
});

test('renders list with initial tasks', () => {
  const { container } = render(<App />);
  const visibleContainer = within(container);

  const test1 = visibleContainer.getByText('Task1');
  const test2 = visibleContainer.getByText('Task2');

  expect(test1).toBeInTheDocument();
  expect(test2).toBeInTheDocument();
});
