class Solution
{
public:
    vector<int> dailyTemperatures(vector<int> &temperatures)
    {
        int n = temperatures.size();
        stack<pair<int, int>> a7a;
        vector<int> ans(n, 0);
        a7a.push({temperatures[0], 0});
        for (int i = 1; i < n; ++i)
        {
            if (a7a.empty())
            {
                a7a.push({temperatures[i], i});
                continue;
            }
            if (temperatures[i] <= a7a.top().first)
            {
                a7a.push({temperatures[i], i});
            }
            else
            {
                while (!a7a.empty() && temperatures[i] > a7a.top().first)
                {
                    auto top = a7a.top();
                    ans[top.second] = i - top.second;
                    a7a.pop();
                }
                a7a.push({temperatures[i], i});
            }
        }
        return ans;
    }
};
