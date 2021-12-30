#include <iostream>
using namespace std;
int main()
{
      const int n=20;
      int a[n]={1,6,9,14,15,17,18,23,24,28,34,39,48,56,67,72,89,92,98,100};
      int x,low,high,mid;
      cout<<"Please input a number x:";
      cin>>x;
      low =0; high =n-1; // 置区间初值
      while (low<=high)
      {
           mid = (low+high)/2 ;
           if (x == a[mid]) break;                     // 找到待查记录
           else if (x<a[mid]) high=mid-1;        // 继续在前半区间进行检索
           else low=mid+1;                            // 继续在后半区间进行检索
      }
      if  (low<=high)                        // 找到待查记录
           cout<<x<<" is a["<<mid<<"]"<<endl;
      else
          cout<<"No found!"<<endl;
      return 0;
}