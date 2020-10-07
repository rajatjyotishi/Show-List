import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DashBoard from "./index";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const getMockStore = configureMockStore([thunkMiddleware]);
const store = getMockStore({
  dashboardReducers: {
    items: [
      {
        id: 2,
        url: "http://www.tvmaze.com/shows/2/person-of-interest",
        name: "Person of Interest",
        genres: ["Action", "Crime", "Science-Fiction"],
        runtime: 60,
        premiered: "2011-09-22",
        officialSite: "http://www.cbs.com/shows/person_of_interest/",
        rating: {
          average: 8.9,
        },
        webChannel: null,
        externals: {
          tvrage: 28376,
          thetvdb: 248742,
          imdb: "tt1839578",
        },
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg",
        },
        summary:
          "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
        updated: 1588773151,
      },
    ],
    favoriteShows: [],
    isLoading: false,
  },
});

const props = {
  history: {
    push: jest.fn(),
    location: {},
  },
  actions: {
    getShowsData: jest.fn(),
  },
  items: [
    {
      id: 2,
      url: "http://www.tvmaze.com/shows/2/person-of-interest",
      name: "Person of Interest",
      genres: ["Action", "Crime", "Science-Fiction"],
      runtime: 60,
      premiered: "2011-09-22",
      officialSite: "http://www.cbs.com/shows/person_of_interest/",
      rating: {
        average: 8.9,
      },
      webChannel: null,
      externals: {
        tvrage: 28376,
        thetvdb: 248742,
        imdb: "tt1839578",
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg",
      },
      summary:
        "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
      updated: 1588773151,
    },
  ],
  favoriteShows: [],
  isLoading: false,
};

describe("Overview tests DashBoard Component", () => {
  let useEffect = null;
  const mockUseEffect = () => {
    useEffect.mockImplementation((f) => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });

  it("should render DashBoard component", () => {
    const { getByText } = render(
      <Router history={createBrowserHistory()}>
        <Provider store={store}>
          <DashBoard {...props} />
        </Provider>
      </Router>
    );

    expect(getByText("SHOWS: ALL")).toBeInTheDocument();
  });
});
