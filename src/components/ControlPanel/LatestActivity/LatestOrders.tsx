import Card from '../../UI/Card/Card.tsx';
import Button from '../../UI/Button/Button.tsx';

const LatestTransactions = () => {
  return (
    <Card title="Latest Transactions">
      <div className="overflow-auto w-full">
        <table>
          <tbody>
          <tr className="border-b border-border-color">
            <td className="p-3 text-card-text-color text-[0.8125rem]">
              <span>#12354781</span>
            </td>
            <td className="p-3 text-card-text-color text-[0.8125rem] min-w-64">
              <div className="flex items-center">
                <div className="size-8 rounded-full mr-2">
                  <img className="size-full block rounded-full" src="/images/static/people/misty.jpg" alt="Riverston"/>
                </div>
                <span className="flex-1">Riverston Glass Chair</span>
              </div>
            </td>
            <td className="p-3 text-card-text-color text-[0.8125rem]">
              <span className="text-white py-0.5 px-1.5 rounded-2xl bg-[#58DB83] text-[0.6rem]">Delivered</span>
            </td>
            <td className="p-3 text-card-text-color text-[0.8125rem]">
              <span>$185</span>
            </td>
            <td className="p-3 text-card-text-color text-[0.8125rem]">
              <span>5/12/2016</span>
            </td>
            <td className="p-3 text-card-text-color text-[0.8125rem]">
              <Button variant="secondary" className="text-xs">Edit</Button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default LatestTransactions;
