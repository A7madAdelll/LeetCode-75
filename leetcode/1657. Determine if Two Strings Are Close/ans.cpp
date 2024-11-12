
class Solution
{
public:
    bool closeStrings(string word1, string word2)
    {
        bool ans = true;
        map<char, long long> wordm1, wordm2;
        for (int i = 0; i < word1.size(); ++i)
        {
            wordm1[word1[i]]++;
        }
        for (int i = 0; i < word2.size(); ++i)
        {
            wordm2[word2[i]]++;
        }
        vector<long long> wchar1, wchar2;
        vector<long long> char1, char2;

        for (auto i : wordm1)
        {
            wchar1.push_back(i.second);
        }
        for (auto i : wordm2)
        {
            wchar2.push_back(i.second);
        }

        for (auto i : wordm1)
        {
            char1.push_back(i.first);
        }
        for (auto i : wordm2)
        {
            char2.push_back(i.first);
        }

        std::sort(wchar1.begin(), wchar1.end());
        std::sort(char1.begin(), char1.end());
        std::sort(wchar2.begin(), wchar2.end());
        std::sort(char2.begin(), char2.end());

        if (wchar1.size() == wchar2.size() && char1.size() == char2.size())
        {
            for (int i = 0; i < char1.size(); ++i)
            {
                if (char1[i] != char2[i])
                    ans = false;
            }
            for (int i = 0; i < wchar1.size(); ++i)
            {
                if (wchar1[i] != wchar2[i])
                    ans = false;
            }
        }
        else
        {
            ans = false;
        }

        return ans;
    }
};