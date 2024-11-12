class Solution
{
public:
    long long maxScore(vector<int> &nums1, vector<int> &nums2, int k)
    {
        vector<pair<long long, long long>> ahmed(nums1.size());
        for (int i = 0; i < nums1.size(); ++i)
        {
            ahmed[i].first = nums2[i];
            ahmed[i].second = nums1[i];
        }
        std::sort(ahmed.begin(), ahmed.end());
        std::reverse(ahmed.begin(), ahmed.end());
        for (int q = 0; q < nums1.size(); q++)
        {
            cout << ahmed[q].first << " " << ahmed[q].second << endl;
        }
        multiset<long long> sumlist;
        long long sum = 0;
        long long ans = 0;
        for (int i = 0; i < nums1.size(); ++i)
        {
            if (sumlist.size() == k)
            {
                if (*sumlist.begin() < ahmed[i].second)
                {
                    sum -= *sumlist.begin();
                    sum += ahmed[i].second;
                    sumlist.erase(sumlist.begin());
                    sumlist.insert(ahmed[i].second);
                }
            }
            else
            {
                sum += ahmed[i].second;
                sumlist.insert(ahmed[i].second);
            }

            //            cout<<sumlist.size()<<" "<<ans<<endl;

            if (sumlist.size() == k)
            {
                ans = max(ans, sum * ahmed[i].first);
                //                cout<<" newans "<<ans<<endl;
            }
        }
        return ans;
    }
};