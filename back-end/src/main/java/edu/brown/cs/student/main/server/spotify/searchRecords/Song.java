package edu.brown.cs.student.main.server.spotify.searchRecords;

import java.util.List;

/**
 * Record that works with moshi to create an object for a song based on the spotify API.
 *
 * @param tracks all the information for the track that was searched for
 */
public record Song(TracksProp tracks) {

}