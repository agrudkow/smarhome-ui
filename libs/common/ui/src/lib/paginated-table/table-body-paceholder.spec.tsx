import React from 'react';
import { customRender } from '@smarthome/common/logic';
import TableDataPaceholder from './table-body-paceholder';

describe(' TableDataPaceholder', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <table>
        <tbody>
          <TableDataPaceholder text="Test text" height={40} colSpan={2} />
        </tbody>
      </table>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot when expanded', () => {
    const { baseElement } = customRender(
      <table>
        <tbody>
          <TableDataPaceholder text="Test text" height={40} colSpan={2} />
        </tbody>
      </table>
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should set placeholder', () => {
    const { getByText } = customRender(
      <table>
        <tbody>
          <TableDataPaceholder
            text="Test placeholder"
            height={40}
            colSpan={2}
          />
        </tbody>
      </table>
    );
    expect(getByText('Test placeholder')).toBeTruthy();
  });
});
